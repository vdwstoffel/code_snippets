from PyQt6.QtWidgets import QApplication, QMainWindow, QMessageBox, QPushButton
import sys

# For other messages boxes
# https://www.pythontutorial.net/pyqt/pyqt-qmessagebox/
class QMessageBoxExample(QMainWindow):
    def __init__(self):
        super().__init__()

        QPushButton("Click Me", self).clicked.connect(self.show_message)

    def show_message(self):

        # Create a message box
        message_box = QMessageBox.question(self, 'Confirmation', "Do you accept", QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No)
        
        # Check what is clicked
        if message_box == QMessageBox.StandardButton.Yes:
            print("User Clicked Yes")
        
        if message_box == QMessageBox.StandardButton.No:
            print("User Clicked No")

if __name__ == '__main__':
    app = QApplication([])
    window = QMessageBoxExample()
    window.show()
    sys.exit(app.exec())