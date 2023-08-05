from colorama import Fore

def interactive_example():
    name = input("What is your name?: ")
    print("Hello " + Fore.RED + f"{name}")

if __name__ == "__main__":
    interactive_example()