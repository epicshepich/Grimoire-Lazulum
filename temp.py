import pydub
import pytube

output_path = "C:/Users/epics/Music"
segments = []

playlist = pytube.Playlist("https://youtube.com/playlist?list=PL3PHwew8KnCl2ImlXd9TQ6UnYveqK_5MC")

for i in range(0,16):
    segments.append(pydub.AudioSegment.from_file(f"{output_path}/.ytmp3_cache/{i}.mp3",format="mp4"))
sum(segments).export(f"{output_path}/{sanitize_filename(playlist.title)}.mp3", format="mp3")
