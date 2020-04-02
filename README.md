# Build a Visual Programming Editor with Blockly

This tutorial will walk you through the steps of creating a web-based visual programming editor from scratch using Blockly. You will learn how to integrate a resizable Blockly interface into a webpage, create custom blocks, and generate some JavaScript.

For this example, you will create a Blockly editor that can modify the look and feel of the current webpage. The user will be able to use blocks to change the site colors and edit the header text.

## Working Example and Tutorial Files

You can view the finished project online at:
http://jaelle.github.io/blockly-page-editor 

The files for this tutorial are available on GitHub.
https://github.com/jaelle/blockly-page-editor

## Get Blockly

Before you get started, make sure to download Blockly. There are several ways to go about this.
* Download the zip file.
* Download the TAR ball.
* Clone the project from git.
  `git clone https://github.com/google/blockly.git blockly`
  
## Start Creating the Page Editor

Now it is time to design the page editor. This webpage will be editable by a Blockly editor contained in the page. It is made up of several parts.

* HTML
  * Webpage (/index.html)
  * Blockly Editor (/blockly.html)
* Styles (/styles.css)
  * Javascript
    * Blockly (/blockly/blockly_uncompressed.js)
    * Blockly Language Support (/blockly/msg/js/en.js)
    * Blockly JavaScript Generator (/blockly/generators/javascript.js)
    * Custom blocks (/blocks.js)
    * Custom block javascript generator (/javascript.js)

Start by creating the HTML page (/index.html). Make it look something like the code found here:
https://github.com/jaelle/blockly-page-editor/blob/gh-pages/index.html 

Next, create the HTML page for Blockly (/blockly.html). This will run in the iframe of index.html. More information about creating a Blockly editor in an iframe can be found on the Blockly Developer site. Make sure it looks something like this:
https://github.com/jaelle/blockly-page-editor/blob/gh-pages/blockly.html
 

Add some styles. An example stylesheet can be found here:
https://github.com/jaelle/blockly-page-editor/blob/gh-pages/styles.css

Visiting /index.html in the browser should reveal the Blockly editor loaded on the page. Several default blocks are loaded into the Blockly editor.  However, we want to create our own custom blocks for editing the page.

## Create Custom Blocks

Visit the Block Factory demo app in your browser. To view this locally, navigate to: blockly/demos/blockfactory/index.html

Note: When working with the Block Factory, you may receive an error that says “Unable to communicate between frames.” If this occurs, you will need to use another browser, such as Firefox, to run Block Factory locally on your computer. Alternatively, you can also visit the Block Factory online at: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html

Use the Block Factory to design custom blocks. Language templates for a custom block and its associated code generator can be created on this page. The left hand side of the screen contains code blocks for setting options of a new custom block. A preview of the new block displays on the upper right hand side of the screen. Below that is a template for the block’s code and the generated JavaScript.

More information about using the Block Factory can be found on the Blockly Developer site.

Create a custom block to hold our page settings. Make it look like the image below. You will be able to find all required blocks under each of the menu items in the left hand toolbar.

![Page Settings Custom Block](tutorial/images/page_settings.png)

