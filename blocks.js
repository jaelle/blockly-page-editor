
Blockly.Blocks['page_settings'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendStatementInput("page_header")
        .appendField("Header:");
    this.appendValueInput("page_color")
        .setCheck("color")
        .appendField("Text Color:");
    this.appendValueInput("page_background")
        .setCheck("color")
        .appendField("Background Color:");
    this.appendValueInput("page_paragraph")
        .setCheck("String")
        .appendField("Paragraph:");
    this.setTooltip('');
  }
};

Blockly.Blocks['page_header'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(240);
    this.appendValueInput("header_text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header Text:");
    this.appendValueInput("page_color")
        .setCheck("color")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color:");
    this.setPreviousStatement(true, "page_settings");
    this.setTooltip('');
  }
};

Blockly.Blocks['page_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Your text."), "page_text");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_blue'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Blue:")
        .appendField(new Blockly.FieldColour("#3333ff"), "blue");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_red'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Red:")
        .appendField(new Blockly.FieldColour("#ff3333"), "red");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_green'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Green:")
        .appendField(new Blockly.FieldColour("#33ff33"), "green");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_black'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Black:")
        .appendField(new Blockly.FieldColour("#000000"), "black");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_white'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("White:")
        .appendField(new Blockly.FieldColour("#ffffff"), "white");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};