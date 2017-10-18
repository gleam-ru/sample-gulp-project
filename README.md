=== install gulp
`npm i -g gulp-cli`

=== install dependencies
`npm i --dev`

=== run your project
`gulp`



=== cheatcheet

src is folder for SouRCes
  - src/assets/** - is folder for assets. Will be copied into dst/assets every time you start gulp.
  - src/styles/** - is watchable folder for scss styles. Will be written into dst/** folder as css files.
  - src/scripts/** - is watchable folder for scripts. Scripts will be babelified and copied into dst/** folder.
  - src/views/** - is watchable folder for pug views. Files will be transformed into html and copied into dst/** folder.
dst is result (DeSTination) folder with compiled files.
  - will be awailable at http://localhost:8000



=== WARNING

YOU SHOULD NOT modify dst/** files because they will be overwritten after launching.
