from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6.QtWidgets import QTableWidget, QTableWidgetItem
import sys

fakeData =[("Rits", "16"), ("Mavis", "5"), ("Lilly", "2")]

class MainWindowShell(QMainWindow):

    def __init__(self):

        super().__init__()
        self.setWindowTitle("Menu Example")

        self.table = QTableWidget(len(fakeData), 2, self)        # rows, columns
        self.table.setHorizontalHeaderLabels(['Name', 'Age'])    # Set the column labels
        self.table.setRowCount(len(fakeData))                    # set the amount of rows
        self.table.cellClicked.connect(self.print_cell_info)     # assign function to each cell click
        self.table.cellDoubleClicked.connect(self.remove_row)

        for idx, record in enumerate(fakeData):
            name, age = record
            self.table.setItem(idx, 0, QTableWidgetItem(name))
            self.table.setItem(idx, 1, QTableWidgetItem(age))
            self.table.setItem(idx, 3, QTableWidgetItem("x"))

        # Resize the columns and rows to fit the contents
        self.table.resizeColumnsToContents()
        self.table.resizeRowsToContents()

        self.setCentralWidget(self.table)

    def print_cell_info(self):
        print(self.table.currentItem().text())      # text of the selected cell
        print(self.table.currentRow())              # print the current row
        print(self.table.currentColumn())

    def remove_row(self):
       current_row = self.table.currentRow()
       self.table.removeRow(current_row)


if __name__ == '__main__':
    app = QApplication([])
    window = MainWindowShell()
    window.show()
    sys.exit(app.exec())