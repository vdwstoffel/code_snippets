from PyQt6.QtWidgets import QApplication, QMainWindow, QPushButton
import sys

class MainWindowShell(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Menu Example")
        self.setFixedWidth(100)
        self.setFixedHeight(100)

        self.btn = QPushButton("Exit", self)    # create the button
        self.btn.clicked.connect(self.exit_app) # connect a function to the button

    def exit_app(self):
        '''
        Function the will be connected to the button
        ''' 
        sys.exit()

if __name__ == '__main__':
    app = QApplication([])
    window = MainWindowShell()
    window.show()
    sys.exit(app.exec())