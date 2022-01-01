def number_of_pairs(gloves):
    pairs = 0
    counted = []

    for glove in gloves:
      if glove not in counted:
        counted.append(glove)
        num_gloves = gloves.count(glove)
        if num_gloves % 2 == 0:
          pairs = pairs + num_gloves
        else:
          pairs = pairs + num_gloves - 1

    
    return pairs / 2