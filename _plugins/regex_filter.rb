module Jekyll
  module RegexFilter
    def regex_replace(input, reg_str, repl_str)
      re = Regexp.new reg_str, Regexp::MULTILINE

      input&.gsub re, repl_str
    end
  end
end

Liquid::Template.register_filter(Jekyll::RegexFilter)
