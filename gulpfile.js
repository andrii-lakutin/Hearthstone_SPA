var gulp = require('gulp'),
	concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css');

gulp.task('scripts', function() {
  return gulp.src(['scripts/StartContent.js',
  				    'scripts/News.js',
  				    'scripts/Slider.js',
  				    'scripts/Comments.js',
  				    'scripts/CardDescription.js',
  				    'scripts/DeckBuild.js',
  				    'scripts/Footer.js',
  				    'scripts/ScrollEvent.js',
  				    'scripts/Registration.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('../Hearthstone'));
});

gulp.task('css', function() {
  return gulp.src(['styles/imports.css.css',
              'styles/reset.css',
              'styles/global.css',
              'styles/header.css',
              'styles/registration.css',
              'styles/navigationMenu.css',
              'styles/startContent.css',
              'styles/anchors.css',
              'styles/news.css',
              'styles/slider.css',
              'styles/chat.css',
              'styles/cardDescription.css',
              'styles/deckBuild.css',
              'styles/footer.css'])
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest('../Hearthstone'));
});

gulp.task('default', ['scripts','css']);