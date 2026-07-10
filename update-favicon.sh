#!/bin/sh

set -euxo pipefail

cd public/
org.inkscape.Inkscape -w 16 -h 16 -o 16.png favicon.svg
org.inkscape.Inkscape -w 32 -h 32 -o 32.png favicon.svg
org.inkscape.Inkscape -w 48 -h 48 -o 48.png favicon.svg

magick 16.png 32.png 48.png favicon.ico
rm 16.png 32.png 48.png