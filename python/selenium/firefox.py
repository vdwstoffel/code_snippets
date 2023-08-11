# For ubuntu you need to install firefox vis deb and not snap
# https://www.omgubuntu.co.uk/2022/04/how-to-install-firefox-deb-apt-ubuntu-22-04#:%7E:text=Installing%20Firefox%20via%20Apt%20(Not%20Snap)&text=You%20add%20the%20Mozilla%20Team,%2C%20bookmarks%2C%20and%20other%20data.

from selenium import webdriver
from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.common.by import By

try:
    # automatically download the webdriver
    driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()))
except:
    '''
    Manually download the webdriver and add it to your path
    https://github.com/mozilla/geckodriver/releases
    export PATH=$PATH:/path/to/folder/geckodriver
    '''
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
search_button = driver.find_element(by=By.CLASS_NAME, value="pure-button-primary-progressive")

# Take action on element
search_box.send_keys("Python")
search_button.click()

# Get text
news = driver.find_element(by=By.ID, value="Computing").text
print(news)

# End the session
driver.quit()

