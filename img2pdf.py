"""This script is to combine image files into a PDF because it is a pain in the
ass for me to have to do it online and then move the file from my downloads
and rename it every time I want to submit an assignment."""

import tkinter as tk
import tkinter.filedialog
from PIL import Image
from fpdf import FPDF

def rgba2rgb(rgba: Image) -> Image:
    """This function converts images with an alpha channel (RGBA) to images
    without (RGB). RGBA images cannot be saved as PDF."""
    rgb = Image.new('RGB', rgba.size, (255, 255, 255))  # white background

    if(len(rgba.split())>=4):
        rgb.paste(rgba, mask=rgba.split()[3])
        #Remove the alpha channel if there is one.
    else:
        rgb = rgba
        #If there is no alpha channel, then just return the input image.
    return rgb

def img2pdf(image_list: list, destination: str) -> None:
    """This function converts a list of images into a PDF.

    Arguments:
    image_list -- a list object containing string file paths to the images
    destination -- a string object containing the destination file path of the
        output PDF
    """
    image_objects = [rgba2rgb(Image.open(image)) for image in image_list]
    #open all the images from their file paths and store them into this list
    #also, convert them from RGBA to RGB

    if len(image_objects) == 1:
        image_objects[0].save(
            destination, "PDF",
            resolution=100.0,
            save_all=True
            )
    elif len(image_objects)>1:
        image_objects[0].save(
            destination, "PDF",
            resolution=100.0,
            save_all=True,
            append_images=image_objects[1:]
            )
    else:
        print("Select at least one image!")


def main():
    """Default behaviour if this module is run as a script"""
    images = tk.filedialog.askopenfilenames(        )
    #Graphically select input image files
    destination_path = tk.filedialog.asksaveasfilename(
        defaultextension="pdf",
        filetypes=[("PDF File", "*.pdf")]
        )
    #Graphically select output destination & file name

    img2pdf(images,destination_path)

if __name__ == "__main__":
    main()#change argument for each module
