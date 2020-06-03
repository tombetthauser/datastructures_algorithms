get_height()
{
  file_info=$(file $1)

  IFS=','
  read -ra ARR1 <<< "$file_info"

  IFS=' '
  read -ra ARR2 <<< "${ARR1[1]}"

  echo ${ARR2[2]}

  # let a=$width-50
  # echo $a

  # for i in "${ARR2[@]}"; do # access each element of array
  #   echo "$i"
  # done
}

get_width()
{
  file_info=$(file $1)

  IFS=','
  read -ra ARR1 <<< "$file_info"

  IFS=' '
  read -ra ARR2 <<< "${ARR1[1]}"

  echo ${ARR2[0]}
}

quad_image()
{
  width=$(get_width $1)
  height=$(get_height $1)
  half_width=$width/2
  half_height=$height/2
  half_height
  # ffmpeg -i $1 -filter:v "crop=out_w:out_h:x:y" "copy_$1"

  mkdir print_files

  ffmpeg -i $1 -filter:v "crop=$half_width:$half_height:0:0" "print_files/topleft_$1"
  ffmpeg -i $1 -filter:v "crop=$half_width:$half_height:$half_width:0" "print_files/topright_$1"
  ffmpeg -i $1 -filter:v "crop=$half_width:$half_height:0:$half_height" "print_files/bottomleft_$1"
  ffmpeg -i $1 -filter:v "crop=$half_width:$half_height:$half_width:$half_height" "print_files/bottomright_$1"
}

clear

printf "\n\nEnter image file in current folder to process (with file extension): "
read file_name

quad_image $file_name

# printf "\n\nEnter height of sign surface in inches with decimals (ie 15.25): "
# read sign_height

# printf "\n\nEnter width of sign surface in inches with decimals (ie 12.5): "
# read sign_width

echo $(get_height $file_name)
echo $(get_width $file_name)