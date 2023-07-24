from PyQt6.QtWidgets import QApplication, QMainWindow, QLineEdit
import sys

class MainWindowShell(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Menu Example")
        self.setFixedWidth(300)
        self.setFixedHeight(300)

        self.enter_text = QLineEdit(self)
        self.enter_text.setFixedWidth(150)
        self.enter_text.setPlaceholderText("Text")
        print(self.enter_text.text())                       # get the text
        

if __name__ == '__main__':
    app = QApplication([])
    window = MainWindowShell()
    window.show()
    sys.exit(app.exec())