from PyQt6.QtWidgets import QApplication, QMainWindow, QTextEdit
import sys

class MainWindowShell(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Menu Example")
        self.setFixedWidth(500)
        self.setFixedHeight(500)

        self.text_edit = QTextEdit("", self)    # Create a Text edit with blank vale
        self.text_edit.setFixedSize(400, 400)   # Set the size
        self.text_edit.setText("newValue")      # Preset a value
        self.text_edit.setReadOnly(False)       # Set editable to True/False
        print(self.text_edit.toPlainText())     # Get the text


if __name__ == '__main__':
    app = QApplication([])
    window = MainWindowShell()
    window.show()
    sys.exit(app.exec())