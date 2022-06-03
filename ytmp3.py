"""This script is for downloading music or other audio from YouTube.
Run this script to open the GUI tool. Paste the URL of a video or playlist
into the entry field. If the Merge box is checked when you download a
playlist, then all of the audios will be combined into a single file. Click
the Download button to start your download.

Requirements:
    - First, download ffmpeg https://ffmpeg.org/ and add it to your PATH.
    - Then, use pip to install:
        - pytube
        - pydub
        - shutil
        - pathvalidate
        - threaded
    - Finally, find a file called cipher.py in your pytube folder. Edit
        line 30 so that the regex is r"^\$*\w+\W" instead of r"^\w+\W"
"""
import pytube
import pydub
import shutil
import tkinter as tk
import tkinter.filedialog
from tkinter.ttk import Progressbar
from pathvalidate import sanitize_filename
import threading


def download_mp3(video:pytube.YouTube,output_path=None,filename=None):
    """This function is used to download the audio from a single video.

    Arguments:
        video - a pytube Youtube object initialized with the url of the
            desired video
        output_path - a string filepath corresponding to the intended
            destination of the output
        filename - a string indicating the file name out the output, which will
            be saved as {filename}.mp3"""
    if filename is None:
        filename = video.title
        #Unless otherwise specified, use the video's title as the file name.
    video.streams.filter(only_audio=True).first().download(
        output_path = output_path,
        filename = f"{sanitize_filename(filename)}.mp3"
        #Remove characters that are not valid for a file name.
    )



class Progress:
    """This class provides an interface for updating a progress bar in the
    GUI."""
    def __init__(self,top:tk.Tk):
        """This method creates tkinter.ttk.Progressbar objects.

        Arguments:
            top - the root of the Tkinter app on which the progress bars are
                to be rendered"""
        self.top = top
        self.bars = {
            "determinate":Progressbar(top,orient="horizontal",mode="determinate"),
            "indeterminate":Progressbar(top,orient="horizontal",mode="indeterminate")
        }
        #Create two progress bars; a "determinate" bar that fills by specified
        #amounts, and an "indeterminate" bar that bounces back and forth.
        self.is_packed = {
            "determinate":False,
            "indeterminate":False
        }
        #These attributes will indicate which (if any) progress bar is
        #rendered on the UI.

    def show_progressbar(self,mode="determinate"):
        """This method will render the desired type of progres bar on the UI.
        If an indeterminate progress bar is desired, it will automatically
        start its animation.

        Arguments:
            mode - a string indicating which type of progress bar to render;
                either "determinate" or "indeterminate"
        """
        self.bars[mode].pack(fill=tk.X,expand=1)
        #Add the desired progress bar to the app layout, and let it expand to
        #fit the width of the window.
        self.is_packed[mode] = True
        #Remember which progress bar is rendered.
        if mode == "indeterminate":
            self.bars["indeterminate"].start()
            #Start the animation of the indeterminate progress bar if it is
            #selected.
        self.top.update()
        #Update the window so that the progress bar is rendered.

    def hide_progressbar(self):
        """This method is used to remove progress bars from the UI when they
        are no longer needed (i.e. when the task is done)."""
        if self.is_packed["determinate"]:
            self.bars["determinate"].pack_forget()
            self.is_packed["determinate"] = False
        if self.is_packed["indeterminate"]:
            self.bars["indeterminate"].stop()
            self.bars["indeterminate"].pack_forget()
            self.is_packed["indeterminate"] = False
        self.top.update()

    def step(self, iteration:int, total:int):
        """This method is used to increment the determinate progress bar by
        a fraction. This method is intended to be used within a loop; after
        each step, the progress will increase by 1/N, where N is the total
        number of iterations.

        Arguments:
            iteration: the numerator of the fraction of the progress bar which
                is to be filled
            total: the denominator of the fraction of the progress bar which is
                to be filled"""
        self.bars["determinate"]["value"] = 100*(iteration)/total
        self.top.update()




def ytmp3(url:str,progress=None,output_path=None,merge_playlist=True):
    """This is the main function of the app. It determines whether a URL
    corresponds a playlist or a single video and handles them appropriately.

    Arguments:
        url - a string containing the URL of the YouTube video or playlist to
            be downloaded
        progress - (optional) an instance of the Progress class; if provided,
            it will handle updating progress bars on the GUI."""
    if url in [None,""]:
        return None
        #If the url is blank, it is probably the result of an aborted
        #operation or misclick.
    output_path = tk.filedialog.askdirectory()
    if output_path == "":
        return None
        #If the output path is an empty string, it is more likely the result of
        #the dialog being than that the user really wants to save the files at
        #"C:/"

    if "/playlist?" in url:
        #Playlist urls tend to look like: youtube.com/playlist?list=______
        playlist = pytube.Playlist(url)

        if progress is not None:
            #Always check that progress is given before trying to update the
            #progress bars (this will only be a problem if someone decides to
            #import this function into their own project and use it without
            #the GUI).
            progress.show_progressbar(mode="determinate")
            #Use a determinate progress bar, which will increment each time a
            #video in the playlist is downloaded.


        if merge_playlist:
            for i,video in enumerate(playlist.videos):
                download_mp3(video,output_path=f"{output_path}/.ytmp3_cache",filename=f"{i}")
                #If the songs are to be merged, then save them into a temporary
                #folder entitled .ytmp3_cache, which will be nested in the
                #output directory. Smiply name the files numerically, to make
                #the next step easier.
                progress.step(i+1,len(playlist.videos))
                #Increment the progress bar.
            segments = []
            #Initialize a list to store the audio segments as they are loaded
            #by pydub.
            if progress is not None:
                progress.hide_progressbar()
                progress.show_progressbar(mode="indeterminate")
                #After the individual songs are all downloaded, swap in the
                #indeterminate progress bar, which will move back and forth
                #while pydub loads and combines the files.
            for i,_ in enumerate(playlist.videos):
                segments.append(pydub.AudioSegment.from_file(f"{output_path}/.ytmp3_cache/{i}.mp3",format="mp4"))
                #Load the files that were saved by pytube back into pydub,
                #which will merge them. I don't totally understand what's going
                #on here, but when we download audio using pytube, even though
                #we specify mp3 as the extension, the files are saved using the
                #mp4 codec (which is apprently for both audio and video files).
                #The format="mp4" kwarg rectifies this.
            sum(segments).export(f"{output_path}/{sanitize_filename(playlist.title)}.mp3", format="mp3")
            #To merge audio segments in pydub, we just have to add them together.
            #Save the merged playlist audio at the desired output destination
            #and set the name of the file equal to the title of the playlist.
            shutil.rmtree(f"{output_path}/.ytmp3_cache")
            #Delete the temporary directory in which the individual files
            #were stored.
        else:
            for i,video in enumerate(playlist.videos):
                download_mp3(video,output_path=output_path)
                #If the audio segments are not to be merged, then simply
                #download them into the destination with the video titles as
                #the file names.
                if progress is not None:
                    progress.step(i+1,len(playlist.videos))
                #Increment the progress bar.
    else:
        if progress is not None:
            progress.show_progressbar(mode="indeterminate")
            #When downloading a single file, there is not a great way to
            #quantitatively track it's progress, so just use an indeterminate
            #progress bar.
        download_mp3(pytube.YouTube(url),output_path=output_path)

    if progress is not None:
        progress.hide_progressbar()
        #Once the download is complete, remove the progress bar.


if __name__ == "__main__":
    #When run as a script, create a GUI tool
    root = tk.Tk()
    #Initialize the Tkinter app.
    label = tk.Label(root,text="URL:")
    label.pack(side=tk.LEFT)
    url_entry = tk.Entry(root,width=75)
    url_entry.pack()

    to_merge = tk.BooleanVar()
    #Create a Tkinter variable to track the state of the "merge" checkbox.
    checkbox = tk.Checkbutton(root,text="Merge",variable=to_merge,onvalue=True,offvalue=False)
    checkbox.pack()

    def _thread_ytmp3():
        """This function runs the download/conversion/merging process in a
        separate thread. Without this intermediary, the Tkinter app will
        stop responding, and indeterminate loading bars will not animate."""
        url = url_entry.get()
        #Get the URL from the entry field.
        url_entry.delete(0, tk.END)
        #Clear the entry field so that the user doesn't accidentally download
        #the same file(s) twice.
        t = threading.Thread(
            target=ytmp3,
            args=(url,),
            kwargs={
                "progress":Progress(root),
                "merge_playlist":to_merge.get()
            }
        )
        t.start()

    download_button = tk.Button(root,text="Download",command=_thread_ytmp3)
    download_button.pack()
    tk.mainloop()
