class Hamming
    VERSION = 1

    def self.compute (dnaString1, dnaString2)
        distance = 0

        if dnaString1.length != dnaString2.length
            raise ArgumentError.new('DNA Strands must be the same length')
        end

        if dnaString1 == dnaString2
            return distance
        end

        (0..dnaString1.length - 1).each do |i|
            distance += 1 unless dnaString1.chars[i] == dnaString2.chars[i]
        end

        return distance
    end
end
