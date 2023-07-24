from PyQt6.QtWidgets import QWidget, QApplication, QGridLayout
import sys

class MainWindow(QWidget):

    def __init__(self):

        super().__init__()

        self.setWindowTitle("PyQt6 Shell Title")        # Title
        self.setMinimumSize(300, 300)                   # Window Size
        grid = QGridLayout()                            # Grid to include all components

        self.setLayout(grid)

        
if __name__ == "__main__":
    app = QApplication(sys.argv)
    ac = MainWindow()
    ac.show()
    sys.exit(app.exec())
