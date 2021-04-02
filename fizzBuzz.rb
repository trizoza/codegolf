# GREG 45 CHARS
# def c(n)
#   (1..n-1).select{|i|i%3==0||i%5==0}.reduce(:+)
# end

def c(n)
    (1..n-1).select{|i|i%3==0||i%5==0}.reduce(:+)
end
puts c(10)
puts c(1000)
