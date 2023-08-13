from PyQt6.QtWidgets import QApplication, QMainWindow, QLabel
import sys

class QLabelExample(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Label Example")
        self.setFixedWidth(300)
        self.setFixedHeight(100)

        self.label = QLabel("This is a label", self)    # create the label
        self.label.setMaximumWidth(300)                 # set max width
        self.label.setFixedWidth(250)                   # Set fixed width
        print(self.label.text())                        # get the label  text
        self.label.setText("Label Value Changed")       # change the label text

if __name__ == '__main__':
    app = QApplication([])
    window = QLabelExample()
    window.show()
    sys.exit(app.exec())