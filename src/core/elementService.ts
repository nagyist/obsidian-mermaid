import { sampleDiagrams } from "src/elements/sampleDiagrams";
import { defaultElements } from "../elements/defaultElements"
import { ElementCategory } from "./ElementCategory";
import { IMermaidElement } from "./IMermaidElement";
import MermaidPlugin from "main";

interface IWrappingData {
    defaultWrapping: string,
    wrappings: string[] | null
}

const wrappingsForElementCategories: Record<ElementCategory, IWrappingData> = {
    Flowchart: { defaultWrapping: "flowchart LR", wrappings: ["flowchart LR", "flowchart TD"] },
    SequenceDiagram: { defaultWrapping: "sequenceDiagram", wrappings: null },
    ClassDiagram: { defaultWrapping: "classDiagram", wrappings: null },
    StateDiagram: { defaultWrapping: "stateDiagram-v2", wrappings: null },
    EntityRelationshipDiagram: { defaultWrapping: "erDiagram", wrappings: null },
    UserJourneyDiagram: { defaultWrapping: "journey", wrappings: null },
    GanttChart: { defaultWrapping: "gantt", wrappings: null },
    PieChart: { defaultWrapping: "pie", wrappings: null },
    RequirementDiagram: { defaultWrapping: "requirementDiagram", wrappings: null },
    GitGraph: { defaultWrapping: "gitGraph", wrappings: null },
    Mindmap: { defaultWrapping: "mindmap", wrappings: ["mindmap"] },
    Timeline: { defaultWrapping: "timeline", wrappings: null },
    QuadrantChart: { defaultWrapping: "quadrantChart", wrappings: null },
    C4Diagram: { defaultWrapping: "C4Context", wrappings: null },
    SankeyDiagram: { defaultWrapping: "sankey-beta", wrappings: null },
    XyChart: { defaultWrapping: "xychart-beta", wrappings: null },

    Packet: { defaultWrapping: "packet-beta", wrappings: null },
    Kanban: { defaultWrapping: "kanban", wrappings: null },
    Block: { defaultWrapping: "block-beta", wrappings: null },
    Architecture: { defaultWrapping: "architecture-beta", wrappings: null },
}

export class MermaidElementService {

    static DefaultElements(): IMermaidElement[] {
        return defaultElements;
    }

    public saveElement(element: IMermaidElement, plugin: MermaidPlugin): void {

        const elementExists = plugin.settings.elements.some(el => el.id === element.id);

        if (elementExists) {
            plugin.settings.elements.forEach(el => {
                if (el.id === element.id) {
                    el = element;
                }
            });

        } else {
            this.fixSortOrder(element, plugin);
            plugin.settings.elements.push(element);
        }

        plugin.saveSettings();       
    }

    public fixSortOrder(element: IMermaidElement, plugin: MermaidPlugin) {
        const elementsFromSameCategory = plugin.settings.elements.filter(element => element.category === element.category);
        if (elementsFromSameCategory.some(element => element.sortingOrder === element.sortingOrder)) {
            element.sortingOrder = elementsFromSameCategory.length;
        }
    }

    public getSampleDiagram(category: ElementCategory): string {
        return this.wrapForPastingIntoEditor(this.wrapWithMermaidBlock(sampleDiagrams[category]));
    }

    public wrapForPastingIntoEditor(text: string): string {
        return `${text}\n`
    }

    public wrapWithMermaidBlock(text: string): string {
        return `\`\`\`mermaid\n${text}\n\`\`\``;
    }

    public wrapAsCompleteDiagram(element: IMermaidElement): string {
        const wrapping = wrappingsForElementCategories[element.category];
        // accTitle for Mindmap is bugged right now
        return (wrapping.wrappings 
                ? wrapping.wrappings.some(w => element.content.contains(w)) 
                : element.content.contains(wrapping.defaultWrapping))
            ? element.content
            : wrapping.defaultWrapping 
                + "\n" 
                + element.content;
    }
}