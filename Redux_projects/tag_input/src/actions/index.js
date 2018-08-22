let nextInputId = 0;
export const addInput = text => ({
  type: 'Add_Input',
  id: nextInputId++,
  text
});

export const cancelInput = id => ({
  type: 'Cancel_input',
  id
});
