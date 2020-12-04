#!/bin/bash

INPUT_FILE='./input-file.txt'
OUTPUT_FILE='./tmp-file.txt'

cat $INPUT_FILE | tr ' ' '\n' > $OUTPUT_FILE