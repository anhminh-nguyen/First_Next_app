"use client";

import { BoldItalicUnderlineToggles, ChangeCodeMirrorLanguage, codeBlockPlugin, codeMirrorAutoLoadLanguageSupport$, codeMirrorExtensions$, codeMirrorPlugin, ConditionalContents, CreateLink, diffSourcePlugin, imagePlugin, InsertCodeBlock, InsertImage, InsertTable, InsertThematicBreak, linkDialogPlugin, linkPlugin, ListsToggle, MDXEditor, Separator, tablePlugin, toolbarPlugin, UndoRedo } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
} from "@mdxeditor/editor";
import './dark-editor.css'
import {basicDark} from "cm6-theme-basic-dark"
import { useTheme } from "next-themes";



const Editor = ({
  editorRef,
  value,
  fieldChange,
  ...props
}: {
  value: string;
  fieldChange: (value: string) => void;
  editorRef: ForwardedRef<MDXEditorMethods> | null;
} & MDXEditorProps) => {
    const {resolveTheme} = useTheme();
    const themeExtension = resolveTheme === "dark"? [basicDark]: [];

  return (
    <MDXEditor
    key={resolveTheme}
    {...props}
    markdown={value}
     ref={editorRef}
    onChange={fieldChange}
    className="background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border"
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        thematicBreakPlugin(),
        tablePlugin(),
        imagePlugin(),
        codeBlockPlugin({defaultCodeBlockLanguage: ''}),
        codeMirrorPlugin({
            codeBlockLanguages: {
            css: "css",
            txt: "txt",
            sql: "sql",
            html: "html",
            saas: "saas",
            scss: "scss",
            bash: "bash",
            json: "json",
            js: "javascript",
            ts: "typescript",
            "": "unspecified",
            tsx: "TypeScript (React)",
            jsx: "JavaScript (React)"
            },
            autoLoadLanguageSupport:true,
            codeMirrorExtensions: themeExtension,
        }),
        diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: ""}),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
            toolbarContents: () => {
    return (
      <ConditionalContents
        options={[
          {
            when: (editor) => editor?.editorType === "codeblock",
            contents: () => <ChangeCodeMirrorLanguage />,
          },
          {
            fallback: () => (
              <>
                <UndoRedo />
                <Separator />

                <BoldItalicUnderlineToggles />
                <Separator />

                <ListsToggle />
                <Separator />

                <CreateLink />
                <InsertImage />
                <Separator />

                <InsertTable />
                <InsertThematicBreak />

                <InsertCodeBlock />

              </>
            ),
          },
        ]}
      />
    );
  },
                
            
        })
      ]}
      
      
    />
  );
};
export default Editor;
