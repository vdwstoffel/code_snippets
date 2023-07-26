from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6.QtGui import QAction
import sys


class MenuBarExample(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Menu Example")

        # Create a menu bar item. & Creates a keyboard shortcut
        menu_bar_item = self.menuBar().addMenu("&File")

        # Create a sub menu. Add self to connect it to the class
        sub_action = QAction("Sub Action", self)
        sub_action.triggered.connect(self.sub_click_handler)
        menu_bar_item.addAction(sub_action)

    def sub_click_handler(self):
        print("Do Something")

if __name__ == '__main__':
    app = QApplication([])
    window = MenuBarExample()
    window.show()
    sys.exit(app.exec())
