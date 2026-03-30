// === TOOLBOX ===
const toolboxXml = `
<xml id="toolbox" style="display: none">
    <block type="move_up"></block>
    <block type="move_down"></block>
    <block type="move_left"></block>
    <block type="move_right"></block>
    <block type="take_carrot"></block>
    <block type="repeat_times"></block>
</xml>`;

// === Блок "Когда запущено" ===
Blockly.Blocks['when_run'] = {
  init: function () {
    this.appendDummyInput().appendField('Когда запущено ▶');
    this.setColour('#4f46e5');
    this.setNextStatement(true, null);
    this.setDeletable(false);
    this.setMovable(false);
  }
};
Blockly.JavaScript['when_run'] = function (block) {
  return ''; // стартовый блок кода не добавляет
};

// === Блоки движения ===
function makeMoveBlock(type, label, dir, img) {
  Blockly.Blocks[type] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(img, 24, 24))
        .appendField(label);

      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour('#10b981');
    }
  };

  Blockly.JavaScript[type] = function () {
    return `program.push(["move","${dir}"]);` + "\n";
  };
}

makeMoveBlock('move_up', 'Вверх', 'up', 'img/up.png');
makeMoveBlock('move_down', 'Вниз', 'down', 'img/down.png');
makeMoveBlock('move_left', 'Влево', 'left', 'img/left.png');
makeMoveBlock('move_right', 'Вправо', 'right', 'img/right.png');

// === Новый блок "Взять морковку" ===
Blockly.Blocks['take_carrot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('img/crystal.png', 24, 24))
      .appendField("Взять");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#f59e0b');
    this.setTooltip("Взять морковку, если стоишь на ней.");
  }
};
Blockly.JavaScript['take_carrot'] = function (block) {
  return `program.push(["take"]);` + "\n";
};

Blockly.Blocks['repeat_times'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Повторить")
        .appendField(new Blockly.FieldDropdown([
          ["2","2"],
          ["3","3"],
          ["4","4"],
          ["5","5"],
          ["6","6"],
          ["7","7"],
          ["8","8"],
          ["9","9"],
          ["10","10"]
        ]), "TIMES")
        .appendField("раз");

    this.appendStatementInput("DO")
        .appendField("делай");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#6366f1');
  }
};

Blockly.JavaScript['repeat_times'] = function(block) {
  const times = parseInt(block.getFieldValue('TIMES'));
  const statements = Blockly.JavaScript.statementToCode(block, 'DO');
  let code = '';
  for (let i = 0; i < times; i++) {
    code += statements;
  }
  return code;
};

