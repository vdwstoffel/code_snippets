from PyQt6.QtWidgets import QApplication, QMainWindow, QToolBar
from PyQt6.QtGui import QAction
import sys

class ToolbarExample(QMainWindow):
    def __init__(self):
        super().__init__()

        # Create a toolbar and add it to the main window
        toolbar = QToolBar('My Toolbar', self)
        toolbar.setMovable(True)
        self.addToolBar(toolbar)

        # Add actions to the toolbar
        action1 = QAction('Action 1', self)
        action1.triggered.connect(self.action1_triggered)
        toolbar.addAction(action1)

    def action1_triggered(self):
        print('Action 1 triggered')

if __name__ == '__main__':
    app = QApplication([])
    window = ToolbarExample()
    window.show()
    sys.exit(app.exec())