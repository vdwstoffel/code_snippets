from PyQt6.QtWidgets import QApplication, QMainWindow, QComboBox
import sys

class MainWindowShell(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Menu Example")
        self.setFixedWidth(300)
        self.setFixedHeight(300)

        dropdown = QComboBox(self)
        dropdown.addItems(["Metric", "Imperial"])
        print(dropdown.currentText())

if __name__ == '__main__':
    app = QApplication([])
    window = MainWindowShell()
    window.show()
    sys.exit(app.exec())