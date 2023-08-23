from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6.QtWidgets import QTableWidget, QTableWidgetItem
import sys

fakeData =[("Rits", "16"), ("Mavis", "5"), ("Lilly", "2")]

class MainWindowShell(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Menu Example")

        table = QTableWidget(len(fakeData), 2, self)        # rows, columns
        table.setHorizontalHeaderLabels(['Name', 'Age'])    # Set the column labels
        table.setRowCount(len(fakeData))                    # set the amount of rows

        for idx, record in enumerate(fakeData):
            name, age = record
            table.setItem(idx, 0, QTableWidgetItem(name))
            table.setItem(idx, 1, QTableWidgetItem(age))

        # Resize the columns and rows to fit the contents
        table.resizeColumnsToContents()
        table.resizeRowsToContents()

        self.setCentralWidget(table) 

if __name__ == '__main__':
    app = QApplication([])
    window = MainWindowShell()
    window.show()
    sys.exit(app.exec())