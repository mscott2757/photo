for f in $1/*.jpg; do
  convert -resize $2 $f $f
done
