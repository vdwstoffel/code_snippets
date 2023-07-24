from PyQt6.QtWidgets import QApplication, QMainWindow, QLabel
import sys

class MainWindowShell(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Menu Example")
        self.setFixedWidth(200)
        self.setFixedHeight(100)

        self.label = QLabel("This is a label", self)    # create the label
        self.label.setMaximumWidth(200)                 # set max width
        print(self.label.text())                        # get the label  text
        self.label.setText("Label Value Changed")       # change the label text

if __name__ == '__main__':
    app = QApplication([])
    window = MainWindowShell()
    window.show()
    sys.exit(app.exec())