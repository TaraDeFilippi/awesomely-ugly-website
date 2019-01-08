function swap_pics() {
                var dog_left = document.getElementById('dog_left'),
					dog_right = document.getElementById('dog_right'),
					dog_left_src = dog_left.src,
					dog_right_src = dog_right.src;

				dog_left.src = dog_right_src;
				dog_right.src = dog_left_src;
            }