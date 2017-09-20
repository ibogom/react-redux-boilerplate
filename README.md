You are welcome to use this project if it is a better fit for your needs, but if you are brand new to the ecosystem I highly recommend checking out something that has received more recent updates.

# REACT REDUX BOILERPLATE
[![Build Status](https://github.com/ibogom/react-redux-boilerplate/react-redux-boilerplate.svg?branch=master)](https://github.com/ibogom/react-redux-boilerplate?branch=master)
[![dependencies](https://github.com/ibogom/react-redux-boilerplate/react-redux-up-to-date.svg)](https://github.com/ibogom/react-redux-boilerplate)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This project was started as development tools that should help web developers create new web sites/application. 

##Installation

After confirming that your environment meets the above [requirements](#requirements), you can create a new project based on `react-redux-boilerplate` by doing the following:

```bash
$ git clone https://github.com/ibogom/react-redux-boilerplate <my-project-name>
$ cd <my-project-name>
```

When that's done, install the project dependencies with `npm install`.

```bash
$ npm install
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ npm start  # Start the development server
```

## Project structure

The project structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. This structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications

```
.
|-- /configs                             # Webpack configs folder
|   |-- base.config.js                   # Base webpack config with default properties
|   |-- dev.config.js                    # Developement webpack config   
|   |-- prod.config.js                   # Production webpack config
|-- /src                                 # Application source code
    |-- /assets                          # In this folder is stored images/fonts and css themes
    |   |-- /themes                      # Css themes folder
    |       |--/default                  # Default theme folder
    |          |-- _color_scheme.scss    # Scss file with default scss color variables 
    |          |-- _fonts.scss           # Scss file with fonts/icons and font variables 
    |          |-- main.scss             # Main scss file of the default theme
    |-- /js                              # Js folder
    |   |--/actions                      # In this folder will be stored reducer action
    |   |--/components                   # Global Reusable Components
    |   |--/containers                   # Global Reusable Containers/Layouts Components
    |   |--/pages                        # Pages routing
    |   |--/reducers                     # Application reducers folder
    |   |--/test                         # Tests folder
    |   |--main.js                       # Application bootstrap and rendering
    |--index.html                        # Main HTML page container for app
```

## Styles

## Tests