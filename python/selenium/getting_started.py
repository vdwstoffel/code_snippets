from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Firefox()

# Set Option
driver.maximize_window()                # Go Fullscreen
driver.implicitly_wait(2)

# Open the browser
driver.get("https://wikipedia.org")

# Request browser information
print(driver.title)

# Find an element
search_box = driver.find_element(by=By.NAME, value="search")
search_button = driver.find_element(
    by=By.CLASS_NAME, value="pure-button-primary-progressive")

# Take action on element
search_box.send_keys("Python")
search_button.click()

# Get text
news = driver.find_element(by=By.ID, value="Computing").text
print(news)

# End the session
driver.quit()
