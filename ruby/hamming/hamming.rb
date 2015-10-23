class Hamming
	VERSION = 1

	def self.compute (dnaString1, dnaString2)
		if dnaString1.length != dnaString2.length
			raise ArgumentError.new('DNA Strands must be the same length')
		end
		
		dna1 = dnaString1.split('')
		dna2 = dnaString2.split('')
		distance = 0

		for i in 0..dna1.length
			if(dna1[i] != dna2[i])
				distance = distance + 1
			end
		end

		return distance
	end
end