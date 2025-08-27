//Editor Settings
const editorSettings={
  "codesandbox.preinstalledExtensions": [
    "esbenp.prettier-vscode",
    "GitHub.vscode-pull-request-github",
    "sdras.night-owl",
    "usernamehw.errorlens",
    "yoavbls.pretty-ts-errors",
    "gieson.smoothy-7-theme",
    "snickerdoodle.snickerdoodle-light"
  ],
  "workbench.colorTheme": "Smoothy 7",

  "editor.lineHeight": "1.6",
  "editor.fontFamily": "JetBrains Mono,Consolas,Courier New, monospace",
  "editor.cursorWidth": 6,
  "workbench.colorCustomizations": {
    "editorCursor.foreground": "#000000",
    "list.errorForeground": "#FF0000"
  },
  "editor.fontSize": 15.8
}
const keyboardSettingsWindows=[
  {
    "key": "ctrl+down",
    "command": "cursorMove",
    "when": "textInputFocus",
    "args": {
      "to": "down",
      "by": "line",
      "value": 6
    }
  },
  {
    "key": "ctrl+up",
    "command": "cursorMove",
    "when": "textInputFocus",
    "args": {
      "to": "up",
      "by": "line",
      "value": 6
    }
  },
  {
    "key": "ctrl+m ctrl+9",
    "command": "editor.action.rename",
    "when": "textInputFocus"
  },
  {
    "key": "ctrl+m ctrl+0",
    "command": "editor.action.selectToBracket",
    "args": {
      "selectBrackets": false
    }
  },
  {
    "key": "ctrl+q",
    "command": "editor.action.smartSelect.expand"
  },
  {
    "key": "ctrl+m ctrl+o",
    "command": "editor.action.marker.next"
  },
  {
    "key": "ctrl+[",
    "command": "-editor.action.outdentLines",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+]",
    "command": "editor.emmet.action.nextEditPoint"
  },
  {
    "key": "ctrl+[",
    "command": "workbench.action.navigateBackInNavigationLocations"
  },
  {
    "key": "ctrl+]",
    "command": "workbench.action.navigateForwardInNavigationLocations"
  },
  {
    "key": "ctrl+m ctrl+u",
    "command": "editor.emmet.action.updateTag"
  },
  {
    "key": "ctrl+m ctrl+r",
    "command": "editor.emmet.action.removeTag"
  },
  {
    "key": "ctrl+s",
    "command": "workbench.action.files.save"
  },
  {
    "key": "ctrl+e",
    "command": "workbench.action.quickOpenNavigateNextInEditorPicker",
    "when": "inEditorPicker && inQuickOpen"
  },
  {
    "key": "ctrl+k ctrl+7",
    "command": "-editor.foldLevel7",
    "when": "editorTextFocus && foldingEnabled"
  },
  {
    "key": "ctrl+k ctrl+7",
    "command": "workbench.action.selectTheme"
  },
  {
    "key": "ctrl+k ctrl+t",
    "command": "-workbench.action.selectTheme"
  },
  {
    "key": "ctrl+alt+right",
    "command": "-workbench.action.moveEditorToNextGroup"
  },
  {
    "key": "ctrl+alt+right",
    "command": "cursorLineEndSelect"
  },
  {
    "key": "ctrl+alt+left",
    "command": "-workbench.action.moveEditorToPreviousGroup"
  },
  {
    "key": "ctrl+alt+left",
    "command": "cursorLineStartSelect"
  },
  {
    "key": "ctrl+m ctrl+k",
    "command": "codesandbox.layout.toggleDevtools"
  },
  {
    "key": "ctrl+'",
    "command": "-codesandbox.layout.toggleDevtools"
  }
]


const keyboardSettingsMac=[
  {
    "key": "cmd+down",
    "command": "cursorMove",
    "when": "textInputFocus",
    "args": {
      "to": "down",
      "by": "line",
      "value": 6
    }
  },
  {
    "key": "cmd+up",
    "command": "cursorMove",
    "when": "textInputFocus",
    "args": {
      "to": "up",
      "by": "line",
      "value": 6
    }
  },
  {
    "key": "cmd+m cmd+9",
    "command": "editor.action.rename",
    "when": "textInputFocus"
  },
  {
    "key": "cmd+m cmd+0",
    "command": "editor.action.selectToBracket",
    "args": {
      "selectBrackets": false
    }
  },
  {
    "key": "cmd+q",
    "command": "editor.action.smartSelect.expand"
  },
  {
    "key": "cmd+m cmd+o",
    "command": "editor.action.marker.next"
  },
  {
    "key": "cmd+[",
    "command": "workbench.action.navigateBackInNavigationLocations"
  },
  {
    "key": "cmd+]",
    "command": "workbench.action.navigateForwardInNavigationLocations"
  },
  {
    "key": "cmd+]",
    "command": "editor.emmet.action.nextEditPoint"
  },
  {
    "key": "cmd+m cmd+u",
    "command": "editor.emmet.action.updateTag"
  },
  {
    "key": "cmd+m cmd+r",
    "command": "editor.emmet.action.removeTag"
  },
  {
    "key": "cmd+s",
    "command": "workbench.action.files.save"
  },
  {
    "key": "cmd+e",
    "command": "workbench.action.quickOpenNavigateNextInEditorPicker",
    "when": "inEditorPicker && inQuickOpen"
  },
  {
    "key": "cmd+k cmd+7",
    "command": "workbench.action.selectTheme"
  },
  {
    "key": "cmd+k cmd+t",
    "command": "-workbench.action.selectTheme"
  },
  {
    "key": "cmd+alt+right",
    "command": "cursorLineEndSelect"
  },
  {
    "key": "cmd+alt+left",
    "command": "cursorLineStartSelect"
  },
  {
    "key": "cmd+m cmd+k",
    "command": "codesandbox.layout.toggleDevtools"
  }
]
