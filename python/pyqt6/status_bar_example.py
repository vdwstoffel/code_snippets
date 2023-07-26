from PyQt6.QtWidgets import QApplication, QMainWindow, QStatusBar
import sys


class StatusBarExample(QMainWindow):
    def __init__(self):
        super().__init__()

        # Create a status bar and add it to the main window
        statusbar = QStatusBar()
        self.setStatusBar(statusbar)

        # Set the initial message on the status bar
        statusbar.showMessage('Ready')


if __name__ == '__main__':
    app = QApplication([])
    window = StatusBarExample()
    window.show()
    sys.exit(app.exec())
