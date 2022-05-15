'use babel';

import EpochConverterMessageDialog from './epoch-converter-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(EpochConverterMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'EpochConverterMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'EpochConverterMessageDialog'
    )
    inkdrop.components.deleteClass(EpochConverterMessageDialog);
  }

};
