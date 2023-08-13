from PyQt6.QtWidgets import QApplication, QMainWindow, QComboBox
import sys

class ComboBoxExample(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("ComboBoxExample")
        self.setFixedWidth(300)
        self.setFixedHeight(100)

        dropdown = QComboBox(self)
        dropdown.addItems(["Metric", "Imperial"])
        print(dropdown.currentText())

if __name__ == '__main__':
    app = QApplication([])
    window = ComboBoxExample()
    window.show()
    sys.exit(app.exec())