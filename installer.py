"""This module is a short and simple way to automate installing python modules.
When run as a script, this code will prompt you for the name of a module to
install.
"""

import subprocess

def install(name):
    """This function will use pip to install a module specified by the argument
    """
    subprocess.run(f"pip install {name}")

def main():
    """Default behaviour when run as a script"""
    module = input("Enter module name: ")
    install(module)

if __name__ == "__main__":
    main()
