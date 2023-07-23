#! /usr/bin/bash

folder='test_folder'
file='test_file'

if [ -d $folder ] 
then
  echo 'folder logs exists'
  rm -r $folder
else
  echo 'Folder logs does not exists'
  mkdir $folder
fi

if [ ! -f $file ]
then
  echo 'file does not exists'
  touch $file
else 
  echo 'file exists'
  rm $file
fi