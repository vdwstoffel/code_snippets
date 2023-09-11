# Code Snippets

Simple code snippets/cookbook style code for quick reference meant to be synced with gitbook. [more info](https://app.gitbook.com/)

Each code snippet should be easy to understand and easy be copied/pasted to be edited.

## Folder structure

Each concept should have its own folder with a corresponding README.md. ex 

```bash
javascript
│   ├── databases
│   │   └── README.md
│   ├── express
│   │   └── README.md
```

## Some nuances

As this is meant to be used with gitbook there are some decree that strays away from traditional markdown

ex Flask jinja templating. This does not render correctly in gitbook if done the traditional way instead look at this example. This also allows to add a caption to the file itseld

{% code title="base.html" %}
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- when extended content can be dynamically added -->
    <title>{% raw %}
{% block title %}{% endblock %}</title>
  </head>
  <body>
    <!-- when extended content can be dynamically added -->
    {% block body %} {% endblock %}
{% endraw %}
  </body>
</html>
```
{% endcode %}

the code-encode allows us to give a caption to the code snippet. raw-endraw allows gitbook to display the jinja template correctly.

### General
To give captions to code
- wrap the code in {% code title='Snippet Title' %} (including ``````) {% endcode %}

### Flask
- wrap all jinja code in {% raw %} {% endraw %}