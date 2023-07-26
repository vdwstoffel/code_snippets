from PyQt6.QtWidgets import QApplication, QMainWindow, QMessageBox, QPushButton
import sys

class QMessageBoxExample(QMainWindow):
    def __init__(self):
        super().__init__()

        QPushButton("Click Me", self).clicked.connect(self.show_message)

    def show_message(self):

        # Create a message box
        message_box = QMessageBox()
        message_box.setText('Hello, world!')

        # Show the message box
        message_box.exec()

if __name__ == '__main__':
    app = QApplication([])
    window = QMessageBoxExample()
    window.show()
    sys.exit(app.exec())