from PyQt6.QtWidgets import QApplication, QLabel, QWidget, QGridLayout, QPushButton, QLineEdit
import sys


class MainWindow(QWidget):

    def __init__(self):

        super().__init__()

        self.setWindowTitle("Welcome to PyQt6")  # Title
        self.setMinimumSize(300, 300)  # set the size of the window
        grid = QGridLayout()  # create a grid that eveything will be placed on

        # Components
        self.name_label = QLabel("Hello World")
        self.enter_text = QLineEdit()
        self.submit_btn = QPushButton("Click Me!")
        self.output = QLabel("")

        # Connect a function to a button click
        self.submit_btn.clicked.connect(self.show_text)

        # add widgets to the grid
        grid.addWidget(self.name_label, 0, 0)
        grid.addWidget(self.enter_text, 1, 0)
        grid.addWidget(self.submit_btn, 2, 0)
        grid.addWidget(self.output, 3, 0)

        # add teh grid to the layout
        self.setLayout(grid)

    def show_text(self):
        '''
        function will be connected to a button click
        '''

        # Get the value from the input
        user_input = self.enter_text.text()
        # Set the label value
        self.output.setText(user_input)


if __name__ == "__main__":

    # Run the application
    app = QApplication(sys.argv)
    ac = MainWindow()
    ac.show()
    sys.exit(app.exec())
