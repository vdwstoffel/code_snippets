from PyQt6.QtWidgets import QApplication, QMainWindow, QLabel, QToolBar
from PyQt6.QtGui import QAction
import sys


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Multi Window Example")
        # TOOLBAR
        toolbar = QToolBar(self)
        self.addToolBar(toolbar)
        # ToolBar Actions
        generate_password_action = QAction("Window 1", self)
        generate_password_action.triggered.connect(self.show_window_one)
        toolbar.addAction(generate_password_action)

        passwords_action = QAction("Window 2", self)
        passwords_action.triggered.connect(self.show_window_two)
        toolbar.addAction(passwords_action)

    def show_window_one(self):
        self.setCentralWidget(WindowOne())

    def show_window_two(self):
        self.setCentralWidget(WindowTwo())


class WindowOne(QMainWindow):
    def __init__(self):
        super().__init__()
        QLabel("Window1", self).setGeometry(10, 40, 200, 20)


class WindowTwo(QMainWindow):
    def __init__(self):
        super().__init__()
        QLabel("Window2", self).setGeometry(10, 40, 200, 20)


if __name__ == '__main__':
    app = QApplication([])
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
