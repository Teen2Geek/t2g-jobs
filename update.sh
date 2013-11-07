echo "Compiling Assets....";
harp compile _harp/ .;
echo "Assets compiled!";
echo "Pushing to Github Pages...";
git add .;
git commit -m "$1";
git push origin gh-pages;
echo "Pushed - $1";
