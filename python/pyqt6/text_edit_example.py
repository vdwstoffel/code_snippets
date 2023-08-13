from PyQt6.QtWidgets import QApplication, QMainWindow, QTextEdit
import sys


class TextEditExample(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Text Edit Example")
        self.setFixedWidth(500)
        self.setFixedHeight(300)

        # Create a Text edit with blank value
        self.text_edit = QTextEdit("", self)
        self.text_edit.setFixedSize(400, 200)   # Set the size
        self.text_edit.setText("preset text")   # Preset a value
        self.text_edit.setReadOnly(False)       # Set editable to True/False
        print(self.text_edit.toPlainText())     # Get the


if __name__ == '__main__':
    app = QApplication([])
    window = TextEditExample()
    window.show()
    sys.exit(app.exec())
