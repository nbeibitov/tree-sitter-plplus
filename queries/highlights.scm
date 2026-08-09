; Keywords
(kw_class) @keyword
(kw_constructor) @keyword
(kw_method) @keyword
(kw_execute) @keyword
(kw_validate) @keyword
(kw_procedure) @keyword
(kw_function) @keyword
(kw_declare) @keyword
(kw_default) @keyword
(kw_type) @keyword
(kw_is) @keyword
(kw_begin) @keyword
(kw_end) @keyword
(kw_if) @keyword
(kw_then) @keyword
(kw_else) @keyword
(kw_elsif) @keyword
(kw_case) @keyword
(kw_when) @keyword
(kw_loop) @keyword
(kw_for) @keyword
(kw_while) @keyword
(kw_in) @keyword
(kw_return) @keyword
(kw_exit) @keyword
(kw_continue) @keyword
(kw_pragma) @keyword
(kw_exception) @keyword
(kw_lock) @keyword
(kw_wait) @keyword
(kw_nowait) @keyword
(kw_skip) @keyword
(kw_where) @keyword
(kw_order) @keyword
(kw_by) @keyword
(kw_select) @keyword
(kw_insert) @keyword
(kw_update) @keyword
(kw_delete) @keyword
(kw_into) @keyword
(kw_of) @keyword
(kw_ref) @keyword
(kw_public) @keyword
(kw_others) @keyword
(kw_out) @keyword
(kw_prior) @keyword
(kw_var) @keyword
(kw_reverse) @keyword
(kw_exact) @keyword
(kw_nostatic) @keyword
(kw_collections) @keyword
(kw_one_by_one) @keyword
(kw_distinct) @keyword
(kw_all) @keyword
(kw_any) @keyword
(kw_exists) @keyword
(kw_multiset) @keyword
(kw_cast) @keyword
(kw_cursor) @keyword
(kw_with) @keyword
(kw_recursive) @keyword
(kw_connect) @keyword
(kw_start) @keyword
(kw_group) @keyword
(kw_having) @keyword
(kw_union) @keyword
(kw_intersect) @keyword
(kw_minus) @keyword
(kw_join) @keyword
(kw_on) @keyword
(kw_offset) @keyword
(kw_fetch) @keyword
(kw_inner) @keyword
(kw_outer) @keyword
(kw_left) @keyword
(kw_right) @keyword
(kw_full) @keyword
(kw_siblings) @keyword
(kw_asc) @keyword
(kw_desc) @keyword
(kw_nulls) @keyword
(kw_first) @keyword
(kw_last) @keyword
(kw_const) @keyword
(kw_nocopy) @keyword
(kw_deterministic) @keyword
(kw_pipelined) @keyword

; Built-ins
(kw_this) @variable.builtin
(kw_null) @constant.builtin
(kw_true) @constant.builtin
(kw_false) @constant.builtin

; Type Keywords
(kw_number) @type.builtin
(kw_integer) @type.builtin
(kw_date) @type.builtin
(kw_varchar) @type.builtin
(kw_varchar2) @type.builtin
(kw_char) @type.builtin
(kw_nchar) @type.builtin
(kw_nvarchar2) @type.builtin
(kw_raw) @type.builtin
(kw_string) @type.builtin
(kw_boolean) @type.builtin
(kw_blob) @type.builtin
(kw_clob) @type.builtin
(kw_nclob) @type.builtin
(kw_bfile) @type.builtin
(kw_rowid) @type.builtin
(kw_timestamp) @type.builtin
(kw_interval) @type.builtin
(kw_record) @type.builtin
(kw_table) @type.builtin
(kw_varray) @type.builtin
(kw_nstring) @type.builtin
(kw_nmemo) @type.builtin
(kw_reference) @type.builtin
(kw_binary_float) @type.builtin
(kw_binary_double) @type.builtin

; OOP and Definitions
(class_declaration name: (_) @type.class)
(method_definition name: (_) @function.method)
(procedure_declaration name: (_) @function)
(function_declaration name: (_) @function)
(variable_declaration name: (_) @variable)
; `parameter` has no `name:` field — unlike variable_declaration above — so the
; name is matched positionally: first named child, or the one right after the
; trailing decorator. Anchors matter here: a plain (parameter (identifier)) also
; catches the identifier of `character set any_cs`.
(parameter . (identifier) @variable)
(parameter (decorator) . (identifier) @variable)

; Types
(datatype) @type
(class_identifier) @type

; Literals
(string) @string
(number) @number
(comment) @comment

; Operators
":=" @operator
"||" @operator
"->" @operator
"=>" @operator
"::" @operator
"=" @operator
"!=" @operator
"<>" @operator
">" @operator
"<" @operator
">=" @operator
"<=" @operator
"+" @operator
"-" @operator
"*" @operator
"/" @operator
"**" @operator
(kw_and) @keyword.operator
(kw_or) @keyword.operator
(kw_not) @keyword.operator
(kw_like) @keyword.operator
(kw_between) @keyword.operator
(kw_member) @keyword.operator
(kw_submultiset) @keyword.operator
(kw_set) @keyword.operator
(kw_empty) @keyword.operator
(kw_nan) @keyword.operator
(kw_infinite) @keyword.operator

; Decorators
(decorator) @attribute

; Macro substitutions
(macro_substitution) @function

; Punctuation
"(" @punctuation.bracket
")" @punctuation.bracket
"[" @punctuation.bracket
"]" @punctuation.bracket
";" @punctuation.delimiter
"," @punctuation.delimiter
"." @punctuation.delimiter
"%" @punctuation.delimiter
