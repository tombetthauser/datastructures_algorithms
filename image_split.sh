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

clear

printf "\n\nEnter image file in current folder to process (with file extension): "
read file_name

echo $(get_height $file_name)
echo $(get_width $file_name)