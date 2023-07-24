from PyQt6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton
import sys

class GeometryExample(QMainWindow):

    def __init__(self):

        super().__init__()

        # Components
        # Add self to place them on the board
        self.label = QLabel("Push the button", self)
        self.btn = QPushButton("Push", self)

        # Set the geometry of the widgets
        # Left, Top, width, heigh
        self.label.setGeometry(10, 10, 120, 20)
        self.btn.setGeometry(30, 60, 70, 20)

if __name__ == '__main__':
    app = QApplication([])
    window = GeometryExample()
    window.show()
    sys.exit(app.exec())