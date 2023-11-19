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

def solve():
    btn = [0,0,0,0,0,0,0,0,0]

    for i in range(9):
        btn[i] = driver.find_element(By.ID, "n" + str(i + 1))
        
    matrix = [[0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0]]
    j = 0
    k = 0

    for i in range(81):
        element = driver.find_element(By.ID, i).get_attribute('innerHTML')
        if element == '':
            matrix[j][k] = '0'
        else:
            matrix[j][k] = element
        k+=1
        if k == 9:
            k = 0
            j += 1
            
    solve_sudoku(matrix)

    j = 0
    k = 0
    for i in range(81):
        element = driver.find_element(By.ID, i)
        element.click()
        btn[int(matrix[j][k]) - 1].click()
        k+=1
        if k == 9:
            k = 0
            j += 1
    choose()

def choose():
    k = input()
    if (k == "1"):
        solve()
    else:
        driver.quit()

driver = webdriver.Chrome()
driver.get('https://absite.ru/sudoku/')

choose()



