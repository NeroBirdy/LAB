from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

def is_valid(board, row, col, num):
    for x in range(9):
        if board[row][x] == num:
            return False

    for x in range(9):
        if board[x][col] == num:
            return False

    start_row, start_col = 3 * (row // 3), 3 * (col // 3)
    for i in range(3):
        for j in range(3):
            if board[i + start_row][j + start_col] == num:
                return False

    return True


def find_empty_location(board, empty_spot):
    for row in range(9):
        for col in range(9):
            if board[row][col] == '0':
                empty_spot[0], empty_spot[1] = row, col
                return True
    return False


def solve_sudoku(board):
    empty_spot = [0, 0]

    if not find_empty_location(board, empty_spot):
        return True

    row, col = empty_spot[0], empty_spot[1]

    for num in map(str, range(1, 10)):
        if is_valid(board, row, col, num):
            board[row][col] = num

            if solve_sudoku(board):
                return True

            board[row][col] = '0'

    return False

def choose():
    k = input("131231")
    if k == "1":
        solve()
    else:
        driver.quit()

def solve():
    btn = [0,0,0,0,0,0,0,0,0]
    btn = driver.find_elements(By.CSS_SELECTOR,'li[role = "menuitem"][style = "opacity: 1;"]')

    matrix = [[0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0]]

    for i in range(9):
        for j in range(9):
            grid = driver.find_element(By.CSS_SELECTOR,'.game-grid__cell[data-row = "' + str(i) + '"][data-column = "' + str(j) + '"]')
            svg = grid.find_element(By.TAG_NAME,'svg')
            text = svg.find_element(By.TAG_NAME,'text').get_attribute('innerHTML')
            if text != '':
                matrix[i][j] = text
            else:
                matrix[i][j] = "0"
    
    solve_sudoku(matrix)

    for i in range(9):
        for j in range(9):
            grid = driver.find_element(By.CSS_SELECTOR,'.game-grid__cell[data-row = "' + str(i) + '"][data-column = "' + str(j) + '"]')
            grid.click()
            svg = grid.find_element(By.TAG_NAME,'svg')
            text = svg.find_element(By.TAG_NAME,'text').get_attribute('innerHTML')
            if text == '':
                btn[int(matrix[i][j]) - 1].click()
            

    choose()

driver = webdriver.Chrome()
driver.maximize_window()
driver.get('https://sudokutable.com/')

choose()



