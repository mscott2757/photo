mkdir $1/full

for f in $1/*.jpg; do
  cp $f $1/full/
  convert -resize $2 $f $f
done
